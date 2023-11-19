import classUtil from "@dev/utils/class-util";

function SnakeFood({ className }: { className?: string }) {
  return (
    <svg
      className={classUtil(className)}
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.1"
        cx="11.2303"
        cy="10.5377"
        r="10.3456"
        fill="#43D9AD"
      />
      <circle
        opacity="0.2"
        cx="11.2303"
        cy="10.5377"
        r="7.34558"
        fill="#43D9AD"
      />
      <circle cx="11.2305" cy="10.5377" r="4" fill="#43D9AD" />
    </svg>
  );
}

export default SnakeFood;
