import AcmeLogo from './acme-logo'

export default function AcmeLogoWrapper() {
  return <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>{<AcmeLogo />}</div>
}
