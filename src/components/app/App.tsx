import { useState, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { ArticleStateType, defaultArticleState } from '../../constants/articleProps';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
    const [appState, setAppState] = useState<ArticleStateType>(defaultArticleState);

    return (
        <div
            className={clsx(styles.main)}
            style={
                {
                    '--font-family': appState.fontFamilyOption.value,
                    '--font-size': appState.fontSizeOption.value,
                    '--font-color': appState.fontColor.value,
                    '--container-width': appState.contentWidth.value,
                    '--bg-color': appState.backgroundColor.value,
                } as CSSProperties
            }
        >
            <ArticleParamsForm setAppState={setAppState} />
            <Article />
        </div>
    );
};
