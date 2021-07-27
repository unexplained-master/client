import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

interface OwnProps {}

type Props = OwnProps;

const Event: FunctionComponent<Props> = (props) => {
    const router = useRouter();

    const { id } = router.query;

    return (<div>
        Event { id }
    </div>);
};

export default Event;
