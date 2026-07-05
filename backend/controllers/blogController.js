import express from "express";

export const createBlog = async (req, res) => {
  try {
    const { title, description, slug } = req.body;
    if (!title || !description || !slug) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const blogExists = await Blog.findOne({ slug });

    if (blogExists) {
      return res.status(400).json({
        success: false,
        message: "Slug already exists",
      });
    }

    const blog = await Blog.create({
      title,
      description,
      slug,
      author: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
