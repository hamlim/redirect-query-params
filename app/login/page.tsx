

export default async function Login(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    let searchParams = await props.searchParams;
    console.log(searchParams);

    return <div>Login: <pre>{JSON.stringify(searchParams, null, 2)}</pre></div>;
}
