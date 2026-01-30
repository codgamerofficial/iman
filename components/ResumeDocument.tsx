import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { experience, education, projects, skills } from '@/data/portfolio-data';

// Register a nice serif font if needed, but standard Times is fine for LaTeX look
// Font.register({ family: 'Times-Roman', src: '...url...' });

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica', // 'Times-Roman' is standard but Helvetica is cleaner for modern resumes
        fontSize: 10,
        lineHeight: 1.5,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    title: {
        fontSize: 12,
        color: '#444',
        marginBottom: 4,
    },
    contact: {
        fontSize: 9,
        color: '#666',
        flexDirection: 'row',
        gap: 10,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 2,
        marginBottom: 8,
        marginTop: 5,
    },
    item: {
        marginBottom: 8,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 11,
    },
    itemSubtitle: {
        fontStyle: 'italic',
        fontSize: 10,
        color: '#333',
    },
    itemDate: {
        fontSize: 9,
        color: '#666',
    },
    itemDescription: {
        fontSize: 9,
        color: '#333',
        marginLeft: 10,
    },
    skillRow: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    skillCategory: {
        fontWeight: 'bold',
        width: 80,
        fontSize: 9,
    },
    skillList: {
        flex: 1,
        fontSize: 9,
    },
});

const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>Iman Khanra</Text>
                <Text style={styles.title}>Civil Engineer & Structural Designer</Text>
                <View style={styles.contact}>
                    <Text>imankhanra@example.com</Text>
                    <Text>•</Text>
                    <Text>+91 12345 67890</Text>
                    <Text>•</Text>
                    <Text>Kolkata, India</Text>
                </View>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {experience.map((job, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemTitle}>{job.title} at {job.company}</Text>
                            <Text style={styles.itemDate}>{job.period}</Text>
                        </View>
                        <Text style={styles.itemSubtitle}>{job.location}</Text>
                        <Text style={styles.itemDescription}>• {job.details}</Text>
                    </View>
                ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {education.map((edu, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemTitle}>{edu.title}</Text>
                            <Text style={styles.itemDate}>{edu.period}</Text>
                        </View>
                        <Text style={styles.itemSubtitle}>{edu.institution}, {edu.location}</Text>
                        <Text style={styles.itemDescription}>• {edu.details}</Text>
                    </View>
                ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Projects</Text>
                {projects.map((proj, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemTitle}>{proj.title}</Text>
                            <Text style={styles.itemDate}>{proj.year}</Text>
                        </View>
                        <Text style={styles.itemDescription}>{proj.description}</Text>
                        <Text style={[styles.itemDescription, { color: '#666', fontSize: 8, marginLeft: 10 }]}>Technologies: {proj.tags.join(', ')}</Text>
                    </View>
                ))}
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                {skills.map((skill, index) => (
                    <View key={index} style={styles.skillRow}>
                        <Text style={styles.skillCategory}>{skill.category}:</Text>
                        <Text style={styles.skillList}>{skill.items.join(', ')}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export default ResumeDocument;
