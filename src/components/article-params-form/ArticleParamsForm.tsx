import { useState, useRef, FormEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

import { OptionType, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, defaultArticleState, ArticleStateType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { useOutsideClickClose } from 'src/components/select/hooks/useOutsideClickClose';

export type ArticleParamsFormProps = {
    setAppState: (value: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setAppState }: ArticleParamsFormProps) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);
    const rootRef = useRef<HTMLDivElement>(null);

    const handleChange = (fieldName: string) => {
        return (value: OptionType) => {
            setFormState((currentFormState) => ({
                ...currentFormState,
                [fieldName]: value,
            }));
        };
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAppState(formState);
        setIsMenuOpened(false);
    };

    const handleReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState(defaultArticleState);
        setAppState(defaultArticleState);
    };

    useOutsideClickClose({
        isOpen: isMenuOpened,
        rootRef,
        onChange: setIsMenuOpened,
        onClose: () => setIsMenuOpened(false)
    });

    return (
      <>
        <ArrowButton
            isActive={isMenuOpened}
            onClick={() => setIsMenuOpened((currentIsOpened) => !currentIsOpened)}
        />
        <div
            onClick={() => setIsMenuOpened(false)}
            className={clsx(styles.overlay, isMenuOpened && styles.overlay_open)}
        />
        <aside ref={rootRef} className={clsx(styles.container, isMenuOpened && styles.container_open)}>
            <form onSubmit={handleSubmit} onReset={handleReset} className={styles.form}>
                <Text uppercase={true} weight={800} size={31}>Задайте параметры</Text>
                <Select
                    title="Шрифт"
                    selected={formState.fontFamilyOption}
                    options={fontFamilyOptions}
                    onChange={handleChange('fontFamilyOption')}
                />
                <RadioGroup
                    title="Размер шрифта"
                    name="fontSizeOption"
                    selected={formState.fontSizeOption}
                    options={fontSizeOptions}
                    onChange={handleChange('fontSizeOption')}
                />
                <Select
                    title="Цвет шрифта"
                    selected={formState.fontColor}
                    options={fontColors}
                    onChange={handleChange('fontColor')}
                />
                <Separator />
                <Select
                    title="Цвет фона"
                    selected={formState.backgroundColor}
                    options={backgroundColors}
                    onChange={handleChange('backgroundColor')}
                />
                <Select
                    title="Ширина контента"
                    selected={formState.contentWidth}
                    options={contentWidthArr}
                    onChange={handleChange('contentWidth')}
                />
                <div className={styles.bottomContainer}>
                    <Button title="Сбросить" type="reset" />
                    <Button title="Применить" type="submit" />
                </div>
            </form>
        </aside>
      </>
    );
};
