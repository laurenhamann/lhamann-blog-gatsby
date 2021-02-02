import styled from '@emotion/styled'
// import { clamps } from '../../../global/responsive/clamps'
// import { animation } from '../../../global/effects/animation'
import { animation, clamps} from '../../../global/global'
const RainbowStyle = styled('div')`
    width: ${clamps.heroBannerWidth};
    ${animation.dash}
    ${animation.rainbowFill}
    svg{
        #red-bow{
            stroke-dasharray:1000;
            stroke-dashoffset: 1000;
            fill-opacity: 0;
            animation: dash 3s 2s 1 linear forwards,
                        colorFill 2s 3.5s 1 linear forwards;
        }
        #yellow-bow{
            stroke-dasharray:1000;
            stroke-dashoffset: 1000;
            fill-opacity: 0;
            animation: dash 3s 3.5s 1 linear forwards,
                        colorFill 2s 5s 1 linear forwards;
        }
        #green-bow{
            stroke-dasharray:1000;
            stroke-dashoffset: 1000;
            fill-opacity: 0;
            animation: dash 3s 5s 1 linear forwards,
                        colorFill 2s 6.5s 1 linear forwards;
        }
        #pink-bow{
            stroke-dasharray:1000;
            stroke-dashoffset: 1000;
            fill-opacity: 0;
            animation: dash 3s 6.5s 1 linear forwards,
                        colorFill 2s 8s 1 linear forwards;
        }
    }


`

export default RainbowStyle