import useProjectForm from "../../hooks/Project/useProjectForm";

export default function ProjectForm() {
  const { form, loading, error, handleChange, handleSubmit } = useProjectForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-md text-black gap-4 p-4 w-2/5 bg-slate-900/80 h-60 py-6 shadow shadow-gray-600"
    >
      {error && <p className="text-red-600">{error.message}</p>}
      <div className="flex items-center gap-x-4">
        <label htmlFor="name" className="text-gray-200 font-semibold text-lg">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="px-4 py-1 rounded-sm"
          placeholder="Write a title"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="description"
          className="text-white font-semibold text-lg"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Write a description"
          className="resize-none px-4 py-1 rounded-sm"
          onChange={handleChange}
          value={form.description}
        />
      </div>
      <button
        aria-label="Create Project"
        className="bg-sky-700 py-2 px-1  text-white font-bold rounded-md hover:bg-sky-600 hover:cursor-pointer transition-colors duration-300 ease-in-out disabled:bg-zinc-400 disabled:cursor-default"
        disabled={loading || !form.name || form.name.trim() === ""}
      >
        Create
      </button>
    </form>
  );
}
