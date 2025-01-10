import { FaLinkedin } from 'react-icons/fa';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AboutUs = ({ images }) => {
  const visibleItems = useIntersectionObserver(); // No destructuring here

  return (
    <div className="grid gap-x-10 gap-y-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((user, index) => (
        <div
          key={index}
          data-index={index} // To uniquely identify each element
          className={`flex flex-col justify-between gap-5 bg-[#17253a] rounded-md p-2 observer-item transition-opacity duration-1000 ${
            visibleItems[index] ? 'opacity-100' : 'opacity-0 '
          }`}
        >
          <img
            src={user.image}
            alt=""
            className="object-cover h-[400px] w-full"
          />
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white  font-bold">
                {user.name}
              </p>
              <p className="text-white ">
                {user.designation}
              </p>
            </div>
            <div>
              <a
                className="overflow-hidden"
                href={user.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="bg-white rounded-[5px] p1 text-[25px]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
