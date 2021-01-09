import React, {ComponentType, FC} from 'react';

const withSuspense = <T, >(WrappedComponent: any, FallbackComponent:React.ReactNode  = null) => {
    return class extends React.Component<T> {


        render() {
            if (!FallbackComponent) {
                return <WrappedComponent {...this.props} />
            }

            // @ts-ignore
            if (this.props.hasOwnProperty('useSuspense') && this.props.useSuspense === false) {
                return <WrappedComponent {...this.props} />
            }

            return (
                <React.Suspense fallback={FallbackComponent}>
                    <WrappedComponent {...this.props} />
                </React.Suspense>
            );
        }
    };
};

export default withSuspense;
