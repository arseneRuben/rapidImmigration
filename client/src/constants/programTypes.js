import { faBriefcase, faGraduationCap, faPlane, faStreetView, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const WORK_PERMIT = 'WORK_PERMIT'
export const STUDY_PERMIT = 'STUDY_PERMIT'
export const VISITOR_PERMIT = 'VISITOR_PERMIT'
export const PERMANENT_RESIDENCE = 'PERMANENT_RESIDENCE'
export const EXPRESS_ENTRY = 'EXPRESS_ENTRY'
export const PROVINCIAL_NOMINEE = 'PROVINCIAL_NOMINEE'
export const SKILLED_WORKER = 'SKILLED_WORKER'
export const FAMILY_SPONSORSHIP = 'FAMILY_SPONSORSHIP'
export const TEMPORARY_FOREIGN_WORKER = 'TEMPORARY_FOREIGN_WORKER'
export const REFUGEE_PROTECTION = 'REFUGEE_PROTECTION'
export const CANADIAN_CITIZENSHIP = 'CANADIAN_CITIZENSHIP'
export const CITIZENSHIP_APPLICATION = 'CITIZENSHIP_APPLICATION'

export const OTHER = 'OTHER'

export function iconsMap({ label  }) {
    switch(label) {
      case  STUDY_PERMIT:
        return faGraduationCap
      case WORK_PERMIT:
        return faBriefcase
      case VISITOR_PERMIT:
        return faStreetView
      case EXPRESS_ENTRY:
            return faTrophy
        default:
            return faPlane
    }
}



