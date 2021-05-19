import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Rules from './components/Rules'
import ContractAddress from './components/ContractAddress'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/bg.png');
    background-position: center center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const LogoHeading = styled.div`
  align-items: center;
  display: flex;
  font-size: 40px;
  font-weight: 600;
  justify-content: space-between;
  margin-bottom: 24px;
  color: #66FCF1;
  font-color: #66FCF1;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <LogoHeading >GrizzlySwap LAYERED 2 FARMING</LogoHeading>
        <Text color="white" font-size="16px" font-weight="400" line-height="1.5">Your Next Generation Yield Farm. Ready To Hunt and Dominate</Text>
        <Text color="white" font-size="16px" font-weight="400" line-height="1.5">Farming will start on <a href="https://bscscan.com/block/countdown/7482700">Block 7482700</a></Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
          <Rules />
        </Cards>
      </div>
    </Page>
  )
}

export default Home

// .