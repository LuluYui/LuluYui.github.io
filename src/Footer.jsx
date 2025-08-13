export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full">
            <p className="text-start text-sm text-slate-500 dark:text-slate-300">
                &copy; {currentYear} Chris Yip. All rights reserved.
            </p>
        </footer>
    );
}