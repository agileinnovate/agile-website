const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchBlogs() {
    try {
        const res = await fetch(`${BASE_URL}/blogs`, {
            cache: 'no-store',
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) {
            console.error(`Status ${res.status}: Failed to fetch blogs from ${BASE_URL}/blogs`);
            return null;
        }
        return res.json();
    } catch (error) {
        console.error('Error in fetchBlogs:', error);
        return null;
    }
}

export async function fetchBlogBySlug(slug: string) {
    try {
        const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
            cache: 'no-store',
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) {
            if (res.status === 404) return null;
            console.error(`Status ${res.status}: Failed to fetch blog ${slug} from ${BASE_URL}/blogs/${slug}`);
            return null;
        }
        return res.json();
    } catch (error) {
        console.error(`Error in fetchBlogBySlug for ${slug}:`, error);
        return null;
    }
}

export async function createBlog(data: any, token?: string) {
    const res = await fetch(`${BASE_URL}/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create blog');
    return res.json();
}

export async function updateBlog(id: string, data: any, token?: string) {
    const res = await fetch(`${BASE_URL}/blogs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update blog');
    return res.json();
}

export async function deleteBlog(id: string, token?: string) {
    const res = await fetch(`${BASE_URL}/blogs/${id}`, {
        method: "DELETE",
        headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    });
    if (!res.ok) throw new Error('Failed to delete blog');
    return res.json();
}

// PRESS ROOM API
export async function fetchPressItems() {
    const res = await fetch(`${BASE_URL}/press`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch press items');
    return res.json();
}

export async function fetchPressBySlug(slug: string) {
    const res = await fetch(`${BASE_URL}/press/slug/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch press item');
    }
    return res.json();
}
