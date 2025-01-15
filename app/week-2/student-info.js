import Link from "next/link";

export function StudentInfo({name, link}) {
    return (
        <>
            <p>Name: Chioma Eme</p>
            <Link href={link}> My Github </Link>
        </>
    );
}