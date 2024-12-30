


/**
 * Node Modules
 */
import PropTypes from "prop-types"

const SkillCard = ({
  imgSrc,
  label,
  desc,
  classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 dark:ring-slate-100 rounded-2xl p-3 hover:bg-zinc-800 dark:hover:bg-slate-200 transition-colors group ' + classes}>
      <figure className="bg-zinc-700/50 dark:bg-slate-200 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 dark:group-hover:bg-slate-400 transition-colors">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
        />
      </figure>

      <div>
        <h3>{label}</h3>

        <p className="text-zinc-400 dark:text-black text-sm">
          {desc}
        </p>
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired
}

export default SkillCard;
