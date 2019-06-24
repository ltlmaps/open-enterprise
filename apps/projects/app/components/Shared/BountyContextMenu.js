import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { ContextMenuItem, theme } from '@aragon/ui'
import { usePanelManagement } from '../Panel'

const BountyContextMenu = ({
  issue,
  work,
  workStatus,
  requestsData,
  onReviewApplication,
}) => {
  const {
    allocateBounty,
    editBounty,
    requestAssignment,
    reviewWork,
    submitWork,
    viewFunding,
  } = usePanelManagement()

  return (
    <React.Fragment>
      {workStatus === undefined && (
        <Item onClick={() => allocateBounty([issue])}>Fund Issue</Item>
      )}
      {workStatus === 'in-progress' && (
        <React.Fragment>
          <Item onClick={() => submitWork(issue)}>Submit Work</Item>
          <Item bordered onClick={() => viewFunding(issue)}>
            View Funding Proposal
          </Item>
        </React.Fragment>
      )}
      {workStatus === 'review-work' && (
        <React.Fragment>
          <Item onClick={() => reviewWork(issue)}>Review Work</Item>
          <Item bordered onClick={() => viewFunding(issue)}>
            View Funding Proposal
          </Item>
        </React.Fragment>
      )}
      {workStatus === 'funded' && (
        <React.Fragment>
          <Item onClick={() => requestAssignment(issue)}>
            Request Assignment
          </Item>
          <Item bordered onClick={() => editBounty([issue])}>
            Update Funding
          </Item>
          <Item onClick={() => viewFunding(issue)}>View Funding Proposal</Item>
        </React.Fragment>
      )}
      {workStatus === 'review-applicants' && (
        <React.Fragment>
          <Item onClick={onReviewApplication}>
            Review Application ({requestsData.length})
          </Item>
          <Item bordered onClick={() => editBounty([issue])}>
            Update Funding
          </Item>
          <Item onClick={() => viewFunding(issue)}>View Funding Proposal</Item>
        </React.Fragment>
      )}
      {workStatus === 'fulfilled' && (
        <Item onClick={() => viewFunding(issue)}>View Funding Proposal</Item>
      )}
    </React.Fragment>
  )
}

const Item = styled(ContextMenuItem)`
  ${props =>
    props.bordered &&
    css`
      border-top: 1px solid ${theme.shadow};
      margin-top: 10px;
      padding-top: 10px;
    `};
`

BountyContextMenu.propTypes = {
  onReviewApplication: PropTypes.func.isRequired,
  work: PropTypes.oneOf([ undefined, PropTypes.object ]),
  workStatus: PropTypes.oneOf([
    undefined,
    'funded',
    'review-applicants',
    'in-progress',
    'review-work',
    'fulfilled',
  ]),
}

export default BountyContextMenu
