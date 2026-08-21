function GlobalErrorPage() {
  return (
    <div className="flex flex-col items-center gap-2 py-16 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">
        Щось пішло не так
      </h1>
      <p className="text-sm text-gray-500">Спробуйте оновити сторінку</p>
    </div>
  );
}
export default GlobalErrorPage;
