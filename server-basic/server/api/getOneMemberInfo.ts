import type { Member } from "~/interfaces";
import { createMemberList } from "~/memberDB";

export default defineEventHandler(
  (event): Member => {
    const query = getQuery(event);
    const memberList = createMemberList();
    const idNo = Number(query.id);
    const member = memberList.get(idNo) as Member;
    return member;
  }
);