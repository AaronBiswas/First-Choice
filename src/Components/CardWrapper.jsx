export default function CardWrapper({ children, imgSrc, footer, className = "" }) {
  return (
    <div className={`card bg-base-100 shadow-md ${className}`}>
      {imgSrc && (
        <figure>
          <img src={imgSrc} alt="card image" />
        </figure>
      )}
      <div className="card-body">
        {children}
        {footer && <div className="card-actions justify-end">{footer}</div>}
      </div>
    </div>
  );
}
