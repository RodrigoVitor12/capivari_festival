type DJSType = {
    name: string,
    instagram: string
}

function DJS ({name, instagram}: DJSType) {
    return (
        <div>
            <div className="border-0 w-35 text-center p-2 rounded-2xl mt-4 bg-[#252525] hover:bg-amber-50">
                <a className="text-blue-600 font-bold text-2xl" href={instagram} target="_blank">{name}</a>
            </div>
        </div>
    )
}

export default DJS