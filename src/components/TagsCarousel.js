import Link from 'next/link'
import Image from 'components/Image'
import styled from 'styled-components'
import { useEmblaCarousel } from 'embla-carousel/react'

function Tags({ data }) {
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <Embla>
      <EmblaViewport ref={viewportRef}>
        <EmblaContainer >
          {data.map(tag => (
            <EmblaSlide key={tag.name}>
              <Link href={`/tag/${tag.alias}`} passHref>
                <EmblaButton>
                  <EmblaSlideInner>
                    <Image
                      src={tag.image_path}
                      layout='fill'
                    />
                  </EmblaSlideInner>
                </EmblaButton>
              </Link>
              <ButtonTitle>{tag.name}</ButtonTitle>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  )
}

const Embla = styled.div`
  position: relative;
  width: 100%;
`

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }
  
  &.is-dragging {
    cursor: grabbing;
  }
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

const EmblaSlide = styled.div`
  position: relative;
  min-width: 128px;
  margin-left: 10px;
`

const EmblaButton = styled.a`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.info};
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  width: 60%;
  aspect-ratio: 1;
  display: inline-block;
`
const ButtonTitle = styled.p`
  font-family: Roboto;
  font-weight: 300;
  width: 100%;
  text-align: center;
  margin-top: 10px;
`

export default Tags