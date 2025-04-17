import React from 'react';
import {
  BlogContainer,
  BlogHeader,
  BlogButton,
  BlogCardsWrapper,
  BlogCard,
  BlogImage,
  BlogTitle,
  BlogDate,
  BlogLinkIcon,
  BlogCardFooter,
} from './BlogSection.styled';
import { ArrowUpIcon } from '@/assets/icons';
import { ArrowIcon } from '@/assets/icons';
import img1 from "@/assets/images/Blog/img1.png"
import img2 from "@/assets/images/Blog/img2.png"
import img3 from "@/assets/images/Blog/img3.png"

const blogs = [
  {
    id: 1,
    title: 'Как правильно освещать дом снаружи?',
    date: '01.01.2024',
    image: `${img3}`,
  },
  {
    id: 2,
    title: 'Как правильно освещать дом снаружи?',
    date: '01.01.2024',
    image: `${img1}`,
  },
  {
    id: 3,
    title: 'Как правильно освещать дом снаружи?',
    date: '01.01.2024',
    image: `${img2}`,
  },
];

const BlogSection = () => {
  return (
    <BlogContainer className="container">
      <BlogHeader >
        <h2>Блог</h2>
        <BlogButton>
          Перейти в блог <ArrowIcon size={18} />
        </BlogButton>
      </BlogHeader>
      <BlogCardsWrapper>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogCardFooter>
              <div>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{blog.date}</BlogDate>
              </div>
              <BlogLinkIcon>
                <ArrowUpIcon size={20} />
              </BlogLinkIcon>
            </BlogCardFooter>
            <hr />
          </BlogCard>
        ))}
      </BlogCardsWrapper>
    </BlogContainer>
  );
};

export default BlogSection;
