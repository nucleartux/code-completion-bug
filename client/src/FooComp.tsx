import * as React from 'react';
import BarComp from '@shared/BarComp'
import StyledComponent from "@shared/StyledComponent";

// ok
export default class FooComp extends React.Component {
    render(): React.ReactNode {
        return <div>
            <BarComp paramb={} parama={}/>
            <StyledComponent /*foo=* - not ok*/>ddsds</StyledComponent>
        </div>
    }
}