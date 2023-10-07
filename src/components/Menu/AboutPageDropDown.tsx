import { Trans } from '@lingui/macro'
import React, { useState } from 'react'
import { ChevronDown, Info } from 'react-feather'
import styled from 'styled-components'

import { ApplicationModal } from 'state/application/actions'
import { useToggleModal } from 'state/application/hooks'

import { NavMenuItem } from '.'

const LinkContainer = styled.div`
  padding-left: 20px;
`

export default function AboutPageDropwdown() {
  const [isShowOptions, setIsShowOptions] = useState(false)
  const toggle = useToggleModal(ApplicationModal.MENU)

  const handleClick = (e: any) => {
    e.preventDefault()
    setIsShowOptions(prev => !prev)
  }

  return (
    <div>
      <NavMenuItem to="/about" onClick={handleClick}>
        <Info size={14} />
        <Trans>About</Trans>
        <ChevronDown size={16} style={{ marginLeft: '6px' }} />
      </NavMenuItem>
      {isShowOptions && (
        <LinkContainer>
          <NavMenuItem to="/about/Metabeoswap" onClick={toggle}>
            <Trans>Metabeoswap</Trans>
          </NavMenuItem>
          <NavMenuItem to="/about/MEO" onClick={toggle}>
            <Trans>MEO</Trans>
          </NavMenuItem>
        </LinkContainer>
      )}
    </div>
  )
}
