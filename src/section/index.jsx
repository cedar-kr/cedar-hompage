import Header from './Header'
import Business from './Business'
import Referance from './Referance';
import Solution from './Solutions';
import SolutionBanner from './SolutionBanner';
import Video from './Video'
import History from './History';
import Footer from './Footer';
import SolutionPackage from './SolutionPackage';
import CompanyBanner from './CompanyBanner';

export const Section = () => {
  return (
    <>
      <Header />
      <Business />
      <Referance />
      <Solution />
      <SolutionBanner />
      <History />
      <CompanyBanner />
      <SolutionPackage />
      <Video />
      <Footer />
    </>
  )
}