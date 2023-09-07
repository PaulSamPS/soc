import clsx from 'clsx';
import React, { ChangeEvent } from 'react';
import styles from './SelectFile.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonAppearance } from '@/shared/ui/Button';

interface SelectFileProps {
    className?: string
    chooseText: string
    chooseTextDone: string
    selectFile?: (e: ChangeEvent<HTMLInputElement>) => void
    fileSelected: string
    uploadText: string
    uploadFile?: () => void
}

export const SelectFile = ({
    className,
    chooseText,
    chooseTextDone,
    selectFile,
    fileSelected,
    uploadText,
    uploadFile
}: SelectFileProps) => (
    <div className={clsx(styles['select-file'], className)}>
        <Input
            type='file'
            id='avatar'
            onChange={selectFile}
            className={styles.file}
        />
        <label htmlFor='avatar'>
            <span
                className={clsx(styles['input-btn'], {
                    [styles['file-success']]: fileSelected,
                })}
            >
                {fileSelected ? chooseTextDone : chooseText}
            </span>
        </label>
        <Button
            appearance={ButtonAppearance.PRIMARY}
            disabled={!fileSelected}
            onClick={uploadFile}
        >
            {uploadText}
        </Button>
    </div>
);
