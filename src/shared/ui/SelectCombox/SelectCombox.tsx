import { useDeferredValue, useEffect, useMemo } from 'react';
import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import { useTranslation } from 'react-i18next';
import styles from './SelectCombox.module.scss';
import list from './list';
import { Text } from '@/shared/ui/Text';
import { LevelSize } from '@/shared/types/common';

interface SelectComboxProps {
    setValue: (value: string | string[]) => void
    defaultValue: string
    label: string
    translate: string
}

export const SelectCombox = ({ setValue, defaultValue, translate, label }: SelectComboxProps) => {
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
        setValue(stateValue);
    }, [setValue, stateValue]);

    return (
        <div className={styles.wrapper}>
            <Ariakit.SelectLabel store={select}>{t(label)}</Ariakit.SelectLabel>
            <Ariakit.Select store={select} className={styles.button} />
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
        </div>
    );
};
