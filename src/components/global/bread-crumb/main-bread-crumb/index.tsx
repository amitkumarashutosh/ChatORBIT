import { PAGE_ICON } from "@/constants/pages";

type Props = {
  slug?: string;
  page: string;
};

const MainBreadCrumb = ({ slug, page }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="radial-gradient-to-br from-[#3352CC] to-[#1C2D70] w-4/12 py-5 lg:py-10 flex flex-col items-center">
            <p className="text-white text-lg">Welcome Back</p>
            <h2 className="capitalize text-white text-4xl font-medium">
              {slug}!
            </h2>
          </div>
        </div>
      )}

      <span className="inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center text-[#3352CC]">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-2xl text-white capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
