import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@aragon/ui'

const IconDelete = ({ alt, color, height, width  }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <title>{alt}</title>
    <path
      d="M18.6183 6.94147H5.38166C5.02473 6.94147 4.73535 7.23084 4.73535 7.58778C4.73535 7.94472 5.02473 8.23409 5.38166 8.23409H18.6183C18.9753 8.23409 19.2646 7.94472 19.2646 7.58778C19.2646 7.23084 18.9753 6.94147 18.6183 6.94147Z"
    />
    <path
      d="M17.1475 6.94147C16.7905 6.94147 16.5012 7.23084 16.5012 7.58778V17.8829C16.5012 18.3375 16.1313 18.7073 15.6768 18.7073H8.32309C7.86849 18.7073 7.49868 18.3375 7.49868 17.8829V7.58778C7.49868 7.23084 7.2093 6.94147 6.85237 6.94147C6.49543 6.94147 6.20605 7.23084 6.20605 7.58778V17.8829C6.20605 19.0503 7.15574 20 8.32312 20H15.6768C16.8441 20 17.7939 19.0503 17.7939 17.8829V7.58778C17.7938 7.23084 17.5045 6.94147 17.1475 6.94147Z"
    />
    <path
      d="M13.4706 4H10.5292C9.36183 4 8.41211 4.94969 8.41211 6.11706V7.58781C8.41211 7.94475 8.70148 8.23412 9.05842 8.23412C9.41536 8.23412 9.70474 7.94475 9.70474 7.58781V6.11706C9.70474 5.66247 10.0746 5.29266 10.5291 5.29266H13.4706C13.9252 5.29266 14.295 5.6625 14.295 6.11706V7.58781C14.295 7.94475 14.5844 8.23412 14.9413 8.23412C15.2983 8.23412 15.5876 7.94475 15.5876 7.58781V6.11706C15.5877 4.94972 14.638 4 13.4706 4Z"
    />
    <path
      d="M10.5294 10.6183C10.1725 10.6183 9.88312 10.9077 9.88312 11.2646V15.6768C9.88312 16.0338 10.1725 16.3231 10.5294 16.3231C10.8864 16.3231 11.1757 16.0338 11.1757 15.6768V11.2646C11.1758 10.9077 10.8864 10.6183 10.5294 10.6183Z"
    />
    <path
      d="M13.4708 10.6183C13.1139 10.6183 12.8245 10.9077 12.8245 11.2646V15.6768C12.8245 16.0338 13.1139 16.3231 13.4708 16.3231C13.8278 16.3231 14.1171 16.0338 14.1171 15.6768V11.2646C14.1171 10.9077 13.8278 10.6183 13.4708 10.6183Z"
    />
  </svg>
)

IconDelete.propTypes = {
  alt: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

IconDelete.defaultProps = {
  alt: 'Delete',
  color: theme.textTertiary,
  height: 24,
  width: 24,
}

export default IconDelete
