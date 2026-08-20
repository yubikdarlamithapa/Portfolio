import * as React from 'react'
import * as Iconsax from 'iconsax-react'
import type { Icon, IconProps } from 'iconsax-react'

function withDefaults(Component: Icon): Icon {
  return function IconsaxWrapped(props: IconProps) {
    return <Component color="currentColor" size={24} {...props} />
  }
}

export const Airplane = withDefaults(Iconsax.Airplane)
export const ArrowDown2 = withDefaults(Iconsax.ArrowDown2)
export const ArrowLeft = withDefaults(Iconsax.ArrowLeft)
export const ArrowLeft2 = withDefaults(Iconsax.ArrowLeft2)
export const ArrowRight = withDefaults(Iconsax.ArrowRight)
export const ArrowRight2 = withDefaults(Iconsax.ArrowRight2)
export const ArrowUp = withDefaults(Iconsax.ArrowUp)
export const ArrowUp2 = withDefaults(Iconsax.ArrowUp2)
export const Award = withDefaults(Iconsax.Award)
export const Book1 = withDefaults(Iconsax.Book1)
export const Briefcase = withDefaults(Iconsax.Briefcase)
export const Building = withDefaults(Iconsax.Building)
export const Calendar = withDefaults(Iconsax.Calendar)
export const Call = withDefaults(Iconsax.Call)
export const Chart = withDefaults(Iconsax.Chart)
export const ChartSquare = withDefaults(Iconsax.ChartSquare)
export const Check = withDefaults(Iconsax.Check)
export const ClipboardText = withDefaults(Iconsax.ClipboardText)
export const ClipboardTick = withDefaults(Iconsax.ClipboardTick)
export const Clock = withDefaults(Iconsax.Clock)
export const CloseSquare = withDefaults(Iconsax.CloseSquare)
export const Code1 = withDefaults(Iconsax.Code1)
export const Cpu = withDefaults(Iconsax.Cpu)
export const Cup = withDefaults(Iconsax.Cup)
export const Diagram = withDefaults(Iconsax.Diagram)
export const DirectDown = withDefaults(Iconsax.DirectDown)
export const DocumentText = withDefaults(Iconsax.DocumentText)
export const Element4 = withDefaults(Iconsax.Element4)
export const Export = withDefaults(Iconsax.Export)
export const Filter = withDefaults(Iconsax.Filter)
export const Flag2 = withDefaults(Iconsax.Flag2)
export const Facebook = withDefaults(Iconsax.Facebook)
export const Instagram = withDefaults(Iconsax.Instagram)
export function Linkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
export const Global = withDefaults(Iconsax.Global)
export const Hashtag = withDefaults(Iconsax.Hashtag)
export const Lamp = withDefaults(Iconsax.Lamp)
export const Location = withDefaults(Iconsax.Location)
export const MagicStar = withDefaults(Iconsax.MagicStar)
export const Menu = withDefaults(Iconsax.Menu)
export const MessageCircle = withDefaults(Iconsax.MessageCircle)
export const Monitor = withDefaults(Iconsax.Monitor)
export const MusicPlay = withDefaults(Iconsax.MusicPlay)
export const Profile2User = withDefaults(Iconsax.Profile2User)
export const QuoteDown = withDefaults(Iconsax.QuoteDown)
export const Refresh = withDefaults(Iconsax.Refresh)
export const SearchNormal = withDefaults(Iconsax.SearchNormal)
export const SearchNormal1 = withDefaults(Iconsax.SearchNormal1)
export const Send2 = withDefaults(Iconsax.Send2)
export const Setting2 = withDefaults(Iconsax.Setting2)
export const Share = withDefaults(Iconsax.Share)
export const ShoppingCart = withDefaults(Iconsax.ShoppingCart)
export const Sms = withDefaults(Iconsax.Sms)
export const Star = withDefaults(Iconsax.Star)
export const Tag = withDefaults(Iconsax.Tag)
export const Teacher = withDefaults(Iconsax.Teacher)
export const TickCircle = withDefaults(Iconsax.TickCircle)
export const TickSquare = withDefaults(Iconsax.TickSquare)
export const TrendUp = withDefaults(Iconsax.TrendUp)
export const Verify = withDefaults(Iconsax.Verify)
export const Video = withDefaults(Iconsax.Video)
export const Whatsapp = withDefaults(Iconsax.Whatsapp)
export const Warning2 = withDefaults(Iconsax.Warning2)

export type { Icon } from 'iconsax-react'
