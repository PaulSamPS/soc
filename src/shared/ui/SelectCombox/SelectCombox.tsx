import { useDeferredValue, useEffect, useMemo } from 'react';
import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './SelectCombox.module.scss';
import list from './list';

interface SelectComboxProps {
    setValue?: (value: string | string[]) => void
    defaultValue: string
    label: string
    translate: string
    readonly: boolean
    reset?: boolean
}

export const SelectCombox = ({ setValue, defaultValue, translate, label, readonly, reset }: SelectComboxProps) => {
    const combobox = Ariakit.useComboboxStore({ resetValueOnHide: true });
    const select = Ariakit.useSelectStore({ combobox, defaultValue });
    const { t } = useTranslation(translate);

    const value = combobox.useState('value');
    const deferredValue = useDeferredValue(value);

    const matches = useMemo(() => matchSorter(list, deferredValue, {
        baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    }), [deferredValue]);

    const stateValue = select.useState('value');

    useEffect(() => {
        if (reset) {
            select.setValue(defaultValue);
        }
        if (setValue) {
            setValue(stateValue);
        }
    }, [defaultValue, reset, select, setValue, stateValue]);

    useEffect(() => {
        if (defaultValue) {
            select.setValue(defaultValue);
        }
    }, [defaultValue, select]);

    return (
        <div className={styles.wrapper}>
            <Ariakit.SelectLabel store={select}>{t(label)}</Ariakit.SelectLabel>
            <Ariakit.Select store={select} className={clsx(styles.button, !readonly && styles.editable)} />
            {!readonly && (
                <Ariakit.SelectPopover
                    store={select}
                    gutter={4}
                    sameWidth
                    className={styles.popover}
                >
                    <div className={styles['combobox-wrapper']}>
                        <Ariakit.Combobox
                            store={combobox}
                            autoSelect
                            placeholder='Search...'
                            className={styles.combobox}
                        />
                    </div>
                    <Ariakit.ComboboxList store={combobox}>
                        {matches.map((value) => (
                            <Ariakit.ComboboxItem
                                key={value}
                                focusOnHover
                                setValueOnClick
                                className={styles['select-item']}
                                render={<Ariakit.SelectItem value={value} />}
                            />
                        ))}
                    </Ariakit.ComboboxList>
                </Ariakit.SelectPopover>
            )}
        </div>
    );
};
