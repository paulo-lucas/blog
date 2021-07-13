import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url';

function CloudinaryImage(props) {
  const cloudName = 'plucas'

  const loader = ({ src, transformations }) => {
    return buildUrl(src, {
      cloud: { cloudName },
      transformations
    });
  }

  return <Image
    loader={loader}
    {...props}
  />
}

export default CloudinaryImage