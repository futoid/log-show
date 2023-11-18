type logDetailsType = {
    level: string
    message: string
    resourceId: string
    timestamp: string
    traceId: string
    spanId: string
    commit: string
    metadata: {
        parentResourceId: string
    }
}

const LogCard = ({
    resourceId,
    traceId,
    spanId,
    commit,
    level,
    message,
    timestamp,
    metadata
}: logDetailsType) => {
    return (
        <div className=" bg-neutral-950 p-4">
            <div className=" flex justify-between">
                <div className=" flex gap-4 lg:gap-8">
                    <p className=" text-xs text-neutral-700 font-mono">resourceId <span className=" text-sm text-neutral-400">{resourceId}</span></p>
                    <p className=" text-xs text-neutral-700 font-mono">traceId <span className=" text-sm text-neutral-400">{traceId}</span></p>
                    <p className=" text-xs text-neutral-700 font-mono">spanId <span className=" text-sm text-neutral-400">{spanId}</span></p>
                    <p className=" text-xs text-neutral-700 font-mono">parentResourceId <span className=" text-sm text-neutral-400">{metadata.parentResourceId}</span></p>
                </div>
                <div className=" hidden lg:flex">
                    <p className=" text-xs text-neutral-400 font-mono">commit <span className=" text-sm text-neutral-200 font-semibold">{commit}</span></p>
                </div>
            </div>
            <div className=" flex gap-6 items-end pt-4 font-mono">
                <h2 className=" text-md text-neutral-400">{level}</h2>
                <div>
                    <h2 className=" text-xl lg:text-2xl">
                        {message}
                    </h2>
                </div>
            </div>
            <div className=" flex items-center justify-between pt-5 lg:pt-2 lg:justify-end">
                <div className=" flex lg:hidden">
                    <p className=" text-xs text-neutral-400 font-mono">commit <span className=" text-sm text-neutral-200 font-semibold">{commit}</span></p>
                </div>
                <div className=" flex justify-end font-mono text-neutral-600 lg:pt-0">
                    <h1>{timestamp}</h1>
                </div>
            </div>
        </div>
    );
}

export default LogCard;
