import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.Appwrite_Url).setProject(conf.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            let userid = userId;
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug,) {
        try {
            await this.databases.deleteDocument(conf.databaseId,
                conf.collectionId,
                slug
            )
            return true

        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.databaseId,
                conf.collectionId,
                slug
            )


        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.databaseId,
                conf.collectionId,
                queries
            )

        } catch (error) {
            throw error
        }

    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.bucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.bucketId,
                fileId,

            )

        } catch (error) {
            console.log(error);
        }
    }
}

const service = new Service();
export default service;
