import { redirect } from 'next/navigation';

export async function GET() {
  redirect('https://github.com/your-username/docs');
}
