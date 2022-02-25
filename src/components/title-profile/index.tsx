import styles from './index.module.scss';
import clsx from 'clsx';

interface IProps {
  title: string;
  content: string;
}

export const TitleProfile: React.FC<IProps> = ({ title, content }) => {
  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.title)}>{title}</p>
      <p className={clsx(styles.content)}>{content}</p>
    </div>
  );
};
