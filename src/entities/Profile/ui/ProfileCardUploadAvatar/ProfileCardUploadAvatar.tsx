import { useTranslation } from 'react-i18next';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from './ProfileCardUploadAvatar.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Portal } from '@/shared/ui/Portal';
import { Modal } from '@/shared/ui/Modal';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';
import { LevelSize } from '@/shared/types/common';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { SelectFile } from '@/shared/ui/SelectFile';

interface ProfileCardUploadAvatarProps {
    onSubmit: (file: FileList) => void
    isLoading: boolean | undefined
}

export const ProfileCardUploadAvatar = ({ onSubmit, isLoading }: ProfileCardUploadAvatarProps) => {
    const { t } = useTranslation('profile');
    const [previewAvatar, setPreviewAvatar] = useState<{avatar: string | undefined}>({ avatar: undefined });
    const [filesAvatar, setFilesAvatar] = useState<FileList | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

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
        setEdit(false);
    }, [filesAvatar, onSubmit]);

    return (
        <div className={styles['profile-card-upload-avatar']}>
            <div className={styles.control}>
                {!edit ? (
                    <Button
                        appearance={ButtonAppearance.PRIMARY}
                        onClick={() => setEdit(true)}
                    >
                        {t('Изменить')}
                    </Button>
                )
                    : (
                        <>
                            <Button
                                appearance={ButtonAppearance.PRIMARY}
                                onClick={() => setOpen(true)}
                            >
                                {t('Загрузить фото')}
                            </Button>
                            <Button
                                appearance={ButtonAppearance.RED}
                                onClick={() => setIsDeleteOpen(true)}
                            >
                                {t('Удалить')}
                            </Button>
                            <Button
                                appearance={ButtonAppearance.OUTLINE}
                                onClick={() => setEdit(false)}
                            >
                                {t('Отменить')}
                            </Button>
                        </>
                    )}
            </div>
            {isLoading ? <LoadingModalOverlay /> : (
                <Portal>
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        closeIcon
                        className={styles.modal}
                    >
                        <>
                            <div className={styles.preview}>
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
                            <Divider className={styles.divider} />
                            <SelectFile
                                chooseText={t('Выберите аватар')}
                                chooseTextDone={t('Аватар выбран')}
                                fileSelected={previewAvatar.avatar!}
                                uploadText={t('Загрузить')}
                                selectFile={selectFileAvatar}
                                uploadFile={onUploadAvatar}
                            />
                        </>
                    </Modal>
                </Portal>
            )}
            {isLoading ? <LoadingModalOverlay /> : (
                <Portal>
                    <Modal
                        isOpen={isDeleteOpen}
                        onClose={() => setIsDeleteOpen(false)}
                        closeIcon
                        className={styles.modal}
                    >
                        <Text fontSize={LevelSize.l2}>{t('Удалить аватар ?')}</Text>
                        <Button
                            appearance={ButtonAppearance.RED}
                        >
                            {t('Да')}
                        </Button>
                        <Button
                            appearance={ButtonAppearance.PRIMARY}
                            onClick={() => setIsDeleteOpen(false)}
                        >
                            {t('Нет')}
                        </Button>
                    </Modal>
                </Portal>
            )}
        </div>
    );
};
