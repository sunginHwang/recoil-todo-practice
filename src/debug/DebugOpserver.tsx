import { useEffect } from 'react';
import { useRecoilSnapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';

function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.debug('The following atoms were modified:');
        console.log(snapshot.getNodes_UNSTABLE({ isModified: true }));

        // @ts-ignore
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            const tag = `State Change ${new Date().toISOString()}`;
            console.group(tag);

            console.log('-');
            console.log(node.key);
            console.log(snapshot.getLoadable(node).contents);
            console.groupEnd();
        }


    }, [snapshot]);


    useRecoilTransactionObserver_UNSTABLE((update) => {
        const { snapshot, previousSnapshot } = update;
        const tag = `!~~State Change ${new Date().toISOString()}`;
        console.group(tag);
        console.log(update);

        // @ts-ignore
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            const tag = `CurrentState Change ${new Date().toISOString()}`;
            console.group(tag);

            console.log('-');
            console.log(node.key);
            console.log(snapshot.getLoadable(node).contents);
            console.groupEnd();
        }

        // @ts-ignore
        for (const node of previousSnapshot.getNodes_UNSTABLE({ isModified: true })) {
            const tag = `PRevState Change ${new Date().toISOString()}`;
            console.group(tag);

            console.log('-');
            console.log(node.key);
            console.log(snapshot.getLoadable(node).contents);
            console.groupEnd();
        }

        console.log(snapshot);
        console.log(previousSnapshot);
        console.groupEnd();
    });

    return null;
}

export default DebugObserver;
