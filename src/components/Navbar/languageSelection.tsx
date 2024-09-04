import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { img } from '@/assets'

export function LanguageSelection() {
  return (
    <Select defaultValue="USD">
      <SelectTrigger className="w-[110px] border-none bg-transparent shadow-none">
        <SelectValue placeholder={'Select'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USD">
          <div className="flex items-center gap-2">
            <Image
              src={img.usaFlag}
              alt="United States Flag"
              width={20}
              height={14}
            />
            <p>(USD)</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
