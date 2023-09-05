import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from './ProfileCardUploadAvatar.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Portal } from '@/shared/ui/Portal';
import { Modal } from '@/shared/ui/Modal';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';
import { LevelSize } from '@/shared/types/common';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';

interface ProfileCardUploadAvatarProps {
    onSubmit: (file: FileList) => void
    isLoading: boolean | undefined
}

export const ProfileCardUploadAvatar = ({ onSubmit, isLoading }: ProfileCardUploadAvatarProps) => {
    const { t } = useTranslation('profile');
    const [previewAvatar, setPreviewAvatar] = useState<{avatar: string | undefined}>({ avatar: undefined });
    const [filesAvatar, setFilesAvatar] = useState<FileList | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const selectFileAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length !== 0) {
            setPreviewAvatar({ avatar: URL.createObjectURL(e.target.files![0]) });
        }
        setFilesAvatar(e.target.files);
    }, []);

    useEffect(() => {
        if (!open) {
            setPreviewAvatar({ avatar: undefined });
        }
    }, [open, previewAvatar.avatar]);

    const onUploadAvatar = useCallback((): void => {
        onSubmit(filesAvatar!);
        setOpen(false);
    }, [filesAvatar, onSubmit]);

    return (
        <div className={styles['profile-card-upload-avatar']}>
            <div className={styles.control}>
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    onClick={() => setOpen(true)}
                >
                    {t('Загрузить фото')}
                </Button>
                <Button
                    appearance={ButtonAppearance.RED}
                >
                    {t('Удалить')}
                </Button>
            </div>
            {isLoading ? <LoadingModalOverlay /> : (
                <Portal>
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        closeIcon
                        className={styles.modal}
                    >
                        <div>
                            <div className={styles.inputFile}>
                                <div className={styles.preview} id='previewNews'>
                                    <div className={styles['preview-image']}>
                                        {previewAvatar.avatar ? (
                                            <img
                                                src={previewAvatar.avatar}
                                                alt='avatar'
                                            />
                                        ) : (
                                            <div className={styles['empty-avatar']}>
                                                <Text fontSize={LevelSize.l2}>{t('Выберите аватар')}</Text>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Divider className={styles.divider} />
                            <div className={styles.upload}>
                                <Input
                                    type='file'
                                    id='avatar'
                                    onChange={selectFileAvatar}
                                    className={styles.file}
                                />
                                <label htmlFor='avatar'>
                                    <span
                                        className={clsx(styles['input-btn'], {
                                            [styles['file-success']]: previewAvatar.avatar,
                                        })}
                                    >
                                        {previewAvatar.avatar ? t('Аватар выбран') : t('Выберите аватар')}
                                    </span>
                                </label>
                                <Button
                                    appearance={ButtonAppearance.PRIMARY}
                                    disabled={!previewAvatar.avatar}
                                    onClick={onUploadAvatar}
                                >
                                    {t('Загрузить')}
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </Portal>
            )}
        </div>
    );
};
