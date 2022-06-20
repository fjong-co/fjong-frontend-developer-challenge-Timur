import * as React from 'react'

import { SvgProps, SvgXml } from 'react-native-svg'

const xml =`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6956 2.31464C11.8895 2.22845 12.1109 2.22845 12.3048 2.31464L21.3048 6.31464C21.5756 6.43502 21.7502 6.70361 21.7502 7C21.7502 7.29639 21.5756 7.56498 21.3048 7.68536L12.3048 11.6854C12.1109 11.7715 11.8895 11.7715 11.6956 11.6854L2.69558 7.68536C2.42474 7.56498 2.25019 7.29639 2.25019 7C2.25019 6.70361 2.42474 6.43502 2.69558 6.31464L11.6956 2.31464ZM4.84685 7L12.0002 10.1793L19.1535 7L12.0002 3.82074L4.84685 7ZM2.31483 11.6954C2.48306 11.3169 2.92628 11.1464 3.30479 11.3146L12.0002 15.1793L20.6956 11.3146C21.0741 11.1464 21.5173 11.3169 21.6855 11.6954C21.8538 12.0739 21.6833 12.5171 21.3048 12.6854L12.3048 16.6854C12.1109 16.7715 11.8895 16.7715 11.6956 16.6854L2.69558 12.6854C2.31707 12.5171 2.1466 12.0739 2.31483 11.6954ZM3.30479 16.3146C2.92628 16.1464 2.48306 16.3169 2.31483 16.6954C2.1466 17.0739 2.31707 17.5171 2.69558 17.6854L11.6956 21.6854C11.8895 21.7715 12.1109 21.7715 12.3048 21.6854L21.3048 17.6854C21.6833 17.5171 21.8538 17.0739 21.6855 16.6954C21.5173 16.3169 21.0741 16.1464 20.6956 16.3146L12.0002 20.1793L3.30479 16.3146Z" />
</svg>
`
export const LayersIcon = (props: SvgProps) => <SvgXml xml={xml} {...props}/>