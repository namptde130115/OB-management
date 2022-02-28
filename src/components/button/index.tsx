import { Button } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';

interface IProps {
  type: 'primary' | 'ghost' | 'default' | 'link';
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const ButtonCustom: React.FC<IProps> = ({
  type,
  text,
  icon,
  className,
}) => {
  return (
    <Button
      type={type}
      className={clsx(className, styles.general, {
        [styles.primary]: type === 'primary',
        [styles.ghost]: type === 'ghost',
        [styles.link]: type === 'link',
      })}
      icon={icon}
    >
      {text}
    </Button>
  );
};
