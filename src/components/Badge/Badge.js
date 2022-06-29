
import {ReactComponent as Remove} from '../../components/assets/images/icon-remove.svg'
const Badge = ({
                   variant = 'basic',
                   colorScheme = 'light',
                   children,
                   onClear,
                   onClick,
               }) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>
      {children}
    </span>
        {variant === 'clearable' && (
            <div className='badge-remover' onClick={onClear}>
                <Remove />
            </div>
        )}
    </div>
);

export default Badge;