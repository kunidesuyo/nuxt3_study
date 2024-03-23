export default defineEventHandler(
  (event): never => {
    throw createError("サーバー側でのエラー発生。");
  }
);