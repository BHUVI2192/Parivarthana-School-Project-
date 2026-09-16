export default function BackToTop() {
  return (
    <span
      style={{
        height: '64px',
        width: '64px',
        marginLeft: '0px',
        marginRight: 'auto',
        marginTop: '0px',
        right: '20px',
        bottom: '20px',
        padding: '20px',
        backgroundImage: 'none',
      }}
      className="u-back-to-top u-custom-color-4 u-icon u-icon-circle u-opacity u-opacity-85"
      data-href="#"
    >
      <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 551.13 551.13">
        <use xlinkHref="#svg-back-to-top"></use>
      </svg>
      <svg
        className="u-svg-content"
        enableBackground="new 0 0 551.13 551.13"
        viewBox="0 0 551.13 551.13"
        xmlns="http://www.w3.org/2000/svg"
        id="svg-back-to-top"
      >
        <path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path>
      </svg>
    </span>
  )
}
