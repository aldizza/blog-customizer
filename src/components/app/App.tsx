import { useState, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { ArticleStateType, defaultArticleState } from '../../constants/articleProps';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
    const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);

    return (
        <main
            className={styles.main}
            style={
                {
                    '--font-family': formState.fontFamilyOption.value,
                    '--font-size': formState.fontSizeOption.value,
                    '--font-color': formState.fontColor.value,
                    '--container-width': formState.contentWidth.value,
                    '--bg-color': formState.backgroundColor.value,
                } as React.CSSProperties
            }
        >
            <ArticleParamsForm setAppState={setFormState} />
            <Article />
        </main>
    );
};
