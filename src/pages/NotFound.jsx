import { Container } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi'

import frogNotFound from '../assets/frogNotFound.svg'
import AbpLink from '../components/common/AbpLink';

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={frogNotFound} alt="notfound" />
        </div>
        {/* CUSTOM BUTTON */}
        <AbpLink path="/">
          <FiHome />
        </AbpLink>
      </Container>
    </div>
  )
}

export default NotFound