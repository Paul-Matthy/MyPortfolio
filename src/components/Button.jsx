

/**
 * @Node Modules
 */
import PropTypes from 'prop-types';


/**
 * Primary Button 
 */

const ButtonPrimary = ({
    herf,
    target = '_self',
    label,
    icon,
    classes
}) => {
   if (herf) {
        return (
            <a 
                href={herf}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined 
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                    </span>
                    : undefined 
                }
            </button>
        )
    }  
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string

}



/**
 * Outline Button 
 */


const ButtonOutline= ({
    herf,
    target = '_self',
    label,
    icon,
    classes
}) => {
   if (herf) {
        return (
            <a 
                href={herf}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined 
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                    </span>
                    : undefined 
                }
            </button>
        )
    }  
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string

}

export {
    ButtonPrimary,   
    ButtonOutline
}
