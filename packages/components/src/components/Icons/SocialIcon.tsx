import Icon from '../Icon/Icon';
import type { IconPropsWithoutChildren } from '../Icon/Icon';

const Social = (props: IconPropsWithoutChildren) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.5688 16.4039C11.5335 16.3891 11.4842 16.3681 11.4228 16.3409C11.3002 16.2865 11.1287 16.2072 10.9244 16.1041C10.5184 15.8992 9.97035 15.5938 9.41596 15.1949C8.37749 14.4477 7 13.1442 7 11.3333C7 9.51192 8.45173 8 10.2857 8C10.9154 8 11.5023 8.18001 12 8.48931C12.4977 8.18001 13.0846 8 13.7143 8C15.5483 8 17 9.51192 17 11.3333C17 13.1442 15.6225 14.4477 14.584 15.1949C14.0297 15.5938 13.4816 15.8992 13.0756 16.1041C12.8713 16.2072 12.6998 16.2865 12.5772 16.3409C12.5158 16.3681 12.4665 16.3891 12.4312 16.4039L12 16.576L11.5688 16.4039ZM9 11.3333C9 10.5774 9.59497 10 10.2857 10C10.662 10 11.004 10.1669 11.2435 10.444L12 11.3189L12.7565 10.444C12.996 10.1669 13.338 10 13.7143 10C14.405 10 15 10.5774 15 11.3333C15 12.0998 14.3775 12.8796 13.416 13.5714C12.9703 13.8921 12.5184 14.1451 12.1744 14.3187C12.1121 14.3501 12.0537 14.3788 12 14.4046C11.9463 14.3788 11.8879 14.3501 11.8256 14.3187C11.4816 14.1451 11.0297 13.8921 10.584 13.5714C9.62251 12.8796 9 12.0998 9 11.3333Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V20H6C3.79086 20 2 18.2091 2 16V8ZM6 6H18C19.1046 6 20 6.89543 20 8V18H6C4.89543 18 4 17.1046 4 16V8C4 6.89543 4.89543 6 6 6Z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
};

export default Social;
