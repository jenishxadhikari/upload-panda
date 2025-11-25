import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function Home() {
  return (
    <section className="py-4 md:py-8">
      <MaxWidthWrapper>
        <h1>UploadPanda</h1>
        <Button>Hello World</Button>
      </MaxWidthWrapper>
    </section>
  )
}
