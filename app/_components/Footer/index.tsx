export default function Footer() {
  return (
    <div className='border-t border-slate-200 py-10 backdrop-blur-sm dark:border-muted-foreground/20'>
      <footer className='container flex justify-center'>
        <p className='text-sm'>
          {`Built by `}
          <span className='font-medium underline underline-offset-2'>{`Trần Quang Khánh`}</span>
          {`. Hosted on `}
          <span className='font-medium underline underline-offset-2'>{`Vercel.`}</span>
        </p>
      </footer>
    </div>
  );
}
