import * as React from 'react';
import BarComp from '@shared/BarComp'

// ok
export default class FooComp extends React.Component {
    render(): React.ReactNode {
        return <div>
            <BarComp paramb={} parama={}/>
        </div>
    }
}